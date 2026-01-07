import Loader from "../loader/loader";
import type { ICardProps } from "./interface";

const Card = ({ children, containerClassName, isLoading }: ICardProps) => {
  return (
    <div className={`bg-card border-border border !rounded-2xl p-4 ${containerClassName}`}>
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Loader />
        </div>
      ) : null}
      {!isLoading && children ? children : null}
    </div>
  );
};

export default Card;
