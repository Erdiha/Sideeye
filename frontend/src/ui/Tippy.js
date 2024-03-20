import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Optional for default styling

const CustomTooltip = ({
  children,
  content,
  animation = "fade",
  size = "regular",
}) => {
  return (
    <Tippy content={content} animation={animation} className={`tippy-${size}`}>
      {children}
    </Tippy>
  );
};

export default CustomTooltip;
