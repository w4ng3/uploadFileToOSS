import { defineComponent } from "vue";
import AnchoredHeading from "./AnchoredHeading";

export default defineComponent({
  render() {
    return (
      <>
        <p>月光照耀在落叶上</p>
        <h2>在墓穴的周围</h2>
        <AnchoredHeading level={1}>
          <span>一条条相互交叉</span> 的线
        </AnchoredHeading>
      </>
    );
  },
});
