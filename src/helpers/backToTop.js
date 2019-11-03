export const SCROLLVIEW_ID = "scrollview";

export default function() {
  document
    .getElementById(SCROLLVIEW_ID)
    .scrollTo({ behavior: "smooth", top: 0 });
}

export function initScrollView() {
  const scrollview = document.getElementById(SCROLLVIEW_ID);
  if (scrollview) {
    scrollview.scrollTo(0, 0);
  }
}
