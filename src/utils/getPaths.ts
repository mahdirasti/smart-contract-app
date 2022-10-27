import { TFunction } from "i18next";
import { absolutePath } from "@/navigation/absoluteRoutes";
import { absoluteRoutes } from "@/navigation";

const getPaths = (pathName: string, t: TFunction): absolutePath[] => {
  //get absolute paths
  const allAbsolutePaths = absoluteRoutes(t);

  //target paths
  let targetPaths = [];

  for (let item of allAbsolutePaths) {
    if (pathName.includes(item.path)) targetPaths.push(item);
  }

  return targetPaths;
};

export default getPaths;
