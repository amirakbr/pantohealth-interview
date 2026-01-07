import LoaderIcon from "./icon";
import type { ILoaderProps } from "./interface";

const Loader = ({
  label = "Getting Data!",
  showLable = true,
  showLoaderIcon = true,
}: ILoaderProps) => {
  return (
    <div className="flex items-center gap-2">
      {showLoaderIcon ? (
        <span className="animate-spin">
          <LoaderIcon />
        </span>
      ) : null}
      {showLable ? <p>{label}</p> : null}
    </div>
  );
};

export default Loader;
