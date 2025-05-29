import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

 export const BackDrop = (props: any) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={1}
    />
  );