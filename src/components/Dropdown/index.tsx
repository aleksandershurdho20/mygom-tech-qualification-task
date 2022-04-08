import {FC} from 'react'
import {
    Dropdown as DD,
    DropdownBtn,
    DropdownContent,
    Item,
    LabelWrapper,
    CategoryTitleWrapper,
    Label
  } from "../../styles";
  import type { TOptionProps, Optionvalue,OptionsData } from "../../utils/types";
  import { XIcon } from '@heroicons/react/solid'

    export  const Dropdown: FC<TOptionProps> = ({
        options,
        onSelectItem,
        value,
        isOpened,
        handleOpenDropdown,
        removeItem
      }) => {
        return (
          <DD>
            <DropdownBtn onClick={handleOpenDropdown}>
              {value.map((el: string) => (
                <LabelWrapper>
                  <span>{el}</span>
                  <XIcon className='icon' onClick={() => removeItem(el)} />
                </LabelWrapper>
              ))}
              {isOpened && (
                <DropdownContent>
                  {options.map((item: OptionsData) => (
                    <>
                      <CategoryTitleWrapper>
                        <span>{item.category}</span>
                      </CategoryTitleWrapper>
                      {item.childrens.map((el: Optionvalue) => (
                        <Item onClick={() => onSelectItem(el)}>
                          <Label>{el.title}</Label>
                        </Item>
                      ))}
                    </>
                  ))}
                </DropdownContent>
              )}
            </DropdownBtn>
          </DD>
        );
      };
