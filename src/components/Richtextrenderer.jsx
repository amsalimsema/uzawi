import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { FiArrowUpRight } from "react-icons/fi";

// Matches bare URLs typed into normal text (capture group keeps them in split()).
const URL_PATTERN = /(https?:\/\/[^\s<>"]*[^\s<>".,;:!?)'\]])/g;

const isExternal = (uri = "") => {
  if (/^(mailto:|tel:|#|\/)/.test(uri)) return false;
  try {
    return (
      new URL(uri, window.location.origin).origin !== window.location.origin
    );
  } catch {
    return false;
  }
};

const hostname = (uri) => {
  try {
    return new URL(uri).hostname.replace(/^www\./, "");
  } catch {
    return uri;
  }
};

// Turns bare URLs inside plain text nodes into hyperlink nodes.
// Text that is already inside a hyperlink is left alone (no nested links).
function autolinkContent(content = [], insideLink = false) {
  return content.flatMap((node) => {
    if (node.nodeType === "text" && !insideLink) {
      const parts = node.value.split(URL_PATTERN);
      if (parts.length === 1) return [node];
      return parts
        .map((part, i) => {
          if (!part) return null;
          if (i % 2 === 1) {
            return {
              nodeType: "hyperlink",
              data: { uri: part },
              content: [
                {
                  nodeType: "text",
                  value: part,
                  marks: node.marks || [],
                  data: {},
                },
              ],
            };
          }
          return { ...node, value: part };
        })
        .filter(Boolean);
    }
    if (node.content) {
      return [
        {
          ...node,
          content: autolinkContent(
            node.content,
            insideLink || node.nodeType === "hyperlink",
          ),
        },
      ];
    }
    return [node];
  });
}

const linkLabel = (link) => link.content.map((c) => c.value || "").join("");

const options = {
  renderNode: {
    // Body text. A paragraph that holds only a link becomes a standalone link card.
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const isEmpty = node.content.every(
        (n) => n.nodeType === "text" && !n.value.trim(),
      );
      if (isEmpty) return null;

      const meaningful = node.content.filter(
        (n) => !(n.nodeType === "text" && !n.value.trim()),
      );
      if (
        meaningful.length === 1 &&
        meaningful[0].nodeType === INLINES.HYPERLINK
      ) {
        const link = meaningful[0];
        const uri = link.data.uri;
        const label = linkLabel(link);
        const external = isExternal(uri);
        return (
          <a
            href={uri}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="not-prose group my-6 flex items-center justify-between gap-4 rounded-lg border border-gray-200 px-5 py-4 no-underline transition-colors hover:border-[#4065FF]"
          >
            <span className="min-w-0">
              <span className="block truncate text-[#0F1662] group-hover:text-[#4065FF]">
                {label}
              </span>
              {label !== uri && (
                <span className="block truncate text-sm text-gray-500">
                  {hostname(uri)}
                </span>
              )}
            </span>
            {external && (
              <FiArrowUpRight
                className="h-5 w-5 shrink-0 text-[#4065FF]"
                aria-hidden="true"
              />
            )}
            {external && <span className="sr-only">(opens in a new tab)</span>}
          </a>
        );
      }

      return (
        <p className="mb-6 text-lg leading-relaxed text-gray-700">{children}</p>
      );
    },

    // Headings: H2 = main section, H3 = subsection
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="mb-4 mt-12 font-serif text-2xl text-[#0F1662] md:text-3xl">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="mb-3 mt-8 font-serif text-xl text-gray-900 md:text-2xl">
        {children}
      </h3>
    ),

    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="mb-6 list-disc space-y-2 pl-6 text-lg text-gray-700">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-lg text-gray-700">
        {children}
      </ol>
    ),
    // Paragraphs inside list items and quotes shouldn't add extra margin
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="[&>p]:mb-0">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="my-8 border-l-4 border-[#00CAFF] pl-6 italic text-gray-700 [&>p]:mb-0">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-10 border-gray-200" />,

    // Images embedded in the body (optional)
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const file = node.data?.target?.fields?.file;
      if (!file?.url || !file.contentType?.startsWith("image/")) return null;
      const src = file.url.startsWith("//") ? `https:${file.url}` : file.url;
      const title = node.data.target.fields.title || "";
      return <img src={src} alt={title} className="my-8 w-full rounded-lg" />;
    },

    // Inline link: any word or phrase, with an arrow when it leaves the site
    [INLINES.HYPERLINK]: (node, children) => {
      const uri = node.data.uri;
      const external = isExternal(uri);
      return (
        <a
          href={uri}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-[#4065FF] underline underline-offset-2 transition-colors hover:text-[#0F1662] break-words"
        >
          {children}
          {external && (
            <>
              <FiArrowUpRight
                className="ml-0.5 inline-block h-3.5 w-3.5 align-[-0.1em]"
                aria-hidden="true"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </>
          )}
        </a>
      );
    },
  },
};

export default function RichTextRenderer({ document }) {
  if (!document?.content?.length) return null;
  const prepared = { ...document, content: autolinkContent(document.content) };
  return <>{documentToReactComponents(prepared, options)}</>;
}
