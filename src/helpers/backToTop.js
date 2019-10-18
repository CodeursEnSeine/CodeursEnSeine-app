export const SCROLLVIEW_ID = "scrollview";

export default function() {
  document
    .getElementById(SCROLLVIEW_ID)
    .scrollTo({ behavior: "smooth", top: 0 });
}
