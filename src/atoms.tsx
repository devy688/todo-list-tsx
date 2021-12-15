import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

/* 카테고리 종류 */
const initialCategories = ["TO_DO", "DOING", "DONE"];

export const categoryKinds = atom<string[]>({
  key: "categories",
  default: initialCategories,
  effects_UNSTABLE: [persistAtom],
});

export const categorySelector = selector<string[]>({
  key: "categorySelector",
  get: ({ get }) => {
    const categories = get(categoryKinds);
    return categories;
  },
  set: ({ set }, newValue) => {
    set(categoryKinds, newValue);
  },
});

/* 투두리스트 정보 */
export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoryState = atom<string>({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
