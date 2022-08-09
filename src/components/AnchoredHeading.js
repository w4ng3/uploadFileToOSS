import { ref, h, defineComponent } from "vue";
import "../style/h.scss";
/** 递归地从子节点获取文本 */
function getChildrenTextContent(children) {
  return children
    .map((node) => {
      return typeof node.children === "string"
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children)
        : "";
    })
    .join("");
}
export default defineComponent({
  name: "AnchoredHeading",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    // 从 children 的文本内容中创建短横线分隔 (kebab-case) id。
    const headingId = getChildrenTextContent(slots.default());
    // .toLowerCase()
    // .replace(/\W+/g, "-") // 用短横线替换非单词字符
    // .replace(/(^-|-$)/g, ""); // 删除前后短横线

    return () =>
      h("h" + props.level, [
        h(
          "a",
          {
            name: headingId,
            href: "#" + headingId,
            class: "yellow",
          },
          slots.default()
        ),
      ]);
  },
});
