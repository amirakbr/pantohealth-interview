import LoaderIcon from "../loader/icon";
import ErrorIcon from "./icon";
import type { IErrorProps } from "./interface";

const Error = ({
  label = "There is Problem .",
  retryCallBack,
  retryButtonLabel = "Try Again !",
}: IErrorProps) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2 py-8 px-2">
      <ErrorIcon />
      <p>{label}</p>
      {retryCallBack ? (
        <div className="flex items-center gap-2 bg-primary-foreground rounded-xl p-2">
          <LoaderIcon />
          <p>{retryButtonLabel}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Error;
