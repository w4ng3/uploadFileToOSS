import { defineComponent } from "vue";
import { get, debounce, set } from "lodash";

export default defineComponent({
  name: "debounce",
  abstract: true, //标记为抽象组件

  render() {
    let vnode = this.$slots.default()[0]; // 子组件的vnode
    console.log("子组件的vnode", vnode);
    if (vnode) {
      let event = get(vnode, `props.onClick`); // 子组件绑定的click事件
      console.log("event", event);
      if (typeof event === "function") {
        set(vnode, `props.onClick`, debounce(event, 1000));
      }
    }
    return vnode;
  },
});
