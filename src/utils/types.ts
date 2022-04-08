export type Optionvalue = {
    id: string;
    title: string;
  };
  export type OptionsData = {
    category: string;
    childrens: Array<Optionvalue>;
  };
  export type TOptionProps = {
    options: Array<OptionsData>;
    onSelectItem: (item: Optionvalue) => void;
    value: Array<string>;
    isOpened: boolean;
    handleOpenDropdown: () => void;
    removeItem: (element: string) => void;
  };
  
  export type TLabel ={
    active:boolean
}
