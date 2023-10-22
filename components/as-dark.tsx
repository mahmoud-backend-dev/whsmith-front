import { Theme } from "@radix-ui/themes";

export const AsDark = <T extends React.ElementType>(
  props: React.ComponentPropsWithoutRef<T> & {
    as: T;
  }
) => {
  const { as: Comp = "button", ...nextProps } = props;

  return (
    <Theme
      accentColor="indigo"
      grayColor="slate"
      radius="large"
      appearance="dark"
      hasBackground={false}
    >
      <Comp {...nextProps} />
    </Theme>
  );
};
