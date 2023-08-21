export type LoopFunc = (data: any) => "stop" | void;

const DeepLoop = <T>(
  objects: Array<any> | object,
  func: LoopFunc,
  props?: Array<string>
): void => {
  for (let i in objects) {
    let data = (objects as any)[i];

    if (typeof data === "object" && props) {
      for (let i in data) {
        if (props.find((p) => p === i)) {
          func(data);
        }
      }
    }

    if (typeof data === "object" || Array.isArray(data))
      DeepLoop<T>(data, func, props);
    else if (typeof data !== "object" && !props) {
      func(data);
    }
  }
};

export default DeepLoop;
