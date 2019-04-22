# html-css-layout-Left-Center-Right
厚积薄发 前端学习笔记 经典三栏布局（圣杯，双飞翼，定位）

## CSS基础实践指导系列

### CSS经典三栏布局总结（左 中 右）
- 圣杯布局
遵循中间内容优先渲染的思路
布局结构：中 左 右
具体思路：父级box设置左右padding（分别就是左内容和右内容的宽度），中，左，右全部设置左浮动，左内容利用margin-left:-100%，移动到最左侧，右内容利用margin-left:-padding右侧的距离，移动到整体布局的最右侧，然后左侧利用position:relative,left:-xxx，右侧利用position:relative,right:-xxx，再次调整左右内容的位置，达到效果

- 双飞翼布局
遵循中间内容优先的渲染思路
布局结构：中 左 右
具体思路：将中内容外部嵌套一层content，将content，左，右全部设置左浮动，中内容设置margin-left和margin-right达到空出左右空间的目的，然后左内容直接使用margin-left:-100%，右内容直接只用margin-left:-(中内容margin右侧的距离)，让左内容定位到最左侧，右内容直接定位到最右侧

- 左右绝对定位或浮动布局
不遵循中间内容优先的渲染思路
布局结构：左 右 中
具体思路：左内容和右内容分别采用float:left 和 float:right 或者 position:absolute,left:0,right:0达到拆分拆分左右内容的目的，同时左右内容脱离文档流，这样中内容只需要通过margin左右的宽度即可自适应内容，可以正常在文档流中显示


### usage:
1. `git clone xxxx`
2. `cd xxx`
3. `npm i or yarn add`

### run in dev:
`yarn dev`

### 说明
框架基于Next.js搭建，在dev环境下，可能存在css的加载问题，如果显示不出来内容，刷新浏览器即可
