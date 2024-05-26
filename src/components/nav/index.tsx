import ExpandButton from '../expand-button';
const Nav = () => {
  return (
    <nav class="h-72px">
      <div class="flex items-center justify-between">
        <div class="flex">
          <h1>Volt+</h1>
          <h1>icon</h1>
        </div>
        <div class="flex">
          <div>
            <a href="">光伏介绍</a>
            <a href="">工商业解决方案</a>
            <a href="">成功案例</a>
            <a href="">关于 volt +</a>
            <a href="">联系我们</a>
          </div>
          <ExpandButton
            onChange={(flag) => {
              console.log(flag);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
