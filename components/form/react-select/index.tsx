import clsx from "clsx";
import styles from "./react-select.module.scss";
import { FormikErrors, FormikValues, useField } from "formik";
import OriginalSelect, {
  ActionMeta,
  GroupBase,
  OnChangeValue,
} from "react-select";
import { useCallback, useMemo } from "react";

type StateManagerProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Parameters<typeof OriginalSelect<Option, IsMulti, Group>>[0];

interface SelectProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends StateManagerProps<Option, IsMulti, Group> {
  name: string;
  label?: string;
}
function ReactSelect<
  Option extends { label: string; value: string },
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  label,
  className,
  value,
  options,
  onChange,
  ...props
}: SelectProps<Option, IsMulti, Group>) {
  const [field, meta, helpers] = useField(props.name);
  const findValue = useCallback(
    (value: any) => {
      if (options) {
        for (const option of options) {
          if ("options" in option) {
            for (const subOption of option.options) {
              if (subOption.value === value) {
                return subOption;
              }
            }
          } else {
            if (option.value === value) {
              return option;
            }
          }
        }
      }
    },
    [options]
  );
  const selectValue = useMemo(() => {
    if (!options) return value;

    return value || Array.isArray(field.value)
      ? field.value.map(findValue)
      : findValue(field.value);
  }, [options, value, field.value, findValue]);
  const id = props.id ?? props.name;

  const handleChange = useCallback(
    (
      newValue: OnChangeValue<Option, IsMulti>,
      actionMeta: ActionMeta<Option>
    ) => {
      helpers.setValue(
        newValue &&
          ("label" in newValue ? newValue?.value : newValue.map((v) => v.value))
      );
      onChange?.(newValue, actionMeta);
    },
    [helpers, onChange]
  );
  return (
    <fieldset className={styles.input}>
      {label && <label htmlFor={id}>{label}</label>}

      <OriginalSelect
        id={id}
        classNames={{
          control: (state) =>
            clsx(styles.control, state.isFocused && styles.focused),
          ...props.classNames,
        }}
        {...props}
        {...field}
        value={selectValue}
        options={options}
        onChange={handleChange}
      />

      {meta.touched && meta.error && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </fieldset>
  );
}

export default ReactSelect;
