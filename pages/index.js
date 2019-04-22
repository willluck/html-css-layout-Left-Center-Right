import Link from "next/link";
import "../styles/index.less";

export default () => (
  <div>
    <div>
      <Link href="/layoutGrail">
        <a>圣杯布局</a>
      </Link>
    </div>
    <div>
      <Link href="/layoutWing">
        <a>双飞翼布局</a>
      </Link>
    </div>
    <div>
      <Link href="/leftAndRight">
        <a>左右绝对定位</a>
      </Link>
    </div>
  </div>
);
