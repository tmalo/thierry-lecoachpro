import { MarkdownSection } from "@/types/testimonial";

export function parseMarkdownSections(markdown: string): MarkdownSection[] {
  const lines = markdown.split("\n");

  const sections: MarkdownSection[] = [];
  let current: MarkdownSection | null = null;

  for (const line of lines) {
    const match = line.match(/^(#{2,6})\s+(.*)/);

    if (match) {
      if (current) sections.push(current);

      current = {
        level: match[1].length,
        title: match[2].trim(),
        content: "",
      };

      continue;
    }

    if (current) {
      current.content += line + "\n";
    }
  }

  if (current) sections.push(current);

  return sections.map((s) => ({
    ...s,
    content: s.content.trim(),
  }));
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function parseInlineMarkdown(text: string): string {
  text = escapeHtml(text);

  // bold + italic
  text = text.replace(/\*\*\*(.+?)\*\*\*/gs, (_, content) => {
    return `<strong><em>${parseInlineMarkdown(content)}</em></strong>`;
  });

  // bold
  text = text.replace(/\*\*(.+?)\*\*/gs, (_, content) => {
    return `<strong>${parseInlineMarkdown(content)}</strong>`;
  });

  // italic
  text = text.replace(/\*(.+?)\*/gs, (_, content) => {
    return `<em>${parseInlineMarkdown(content)}</em>`;
  });

  return text;
}

export function markdownToHtml(markdown: string): string {
  const sections = parseMarkdownSections(markdown);

  return sections
    .map((section) => {
      const title = `<h${section.level}>${parseInlineMarkdown(section.title)}</h${section.level}>`;

      const paragraphs = section.content
        .split(/\n{2,}/)
        .map((p) => `<p>${parseInlineMarkdown(p.trim())}</p>`)
        .join("\n");

      return `${title}\n${paragraphs}`;
    })
    .join("\n\n");
}
