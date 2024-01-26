import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const close = 2000;

export const successNotify = (text = "") => {
  toast(text, {
    autoClose: close,
    type: "success",
  });
};

export const errorNotify = (text = "") => {
  toast(text, {
    autoClose: close,
    type: "error",
  });
};
