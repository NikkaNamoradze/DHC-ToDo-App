import {
  Modal as RNModal,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface ModalType {
  style?: StyleProp<ViewStyle>;
  visible: boolean;
  children?: any;
  animation?: "none" | "fade" | "slide" | undefined;
}

export const Modal = (props: ModalType) => {
  return (
    <RNModal
      visible={props.visible}
      transparent
      animationType={props.animation}
    >
      <View style={[styles.modal, props.style]}>{props.children}</View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(16, 32, 43, 0.5)",
  },
});
