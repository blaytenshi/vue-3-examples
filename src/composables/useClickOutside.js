import { onMounted, onUnmounted } from "vue";

const useClickOutside = (refs, toggleOff) => {
  function clickOutside(event) {
    if (refs.some((ref) => (ref.value?.$el || ref.value) === event.target || (ref.value?.$el || ref.value)?.contains(event.target))) {
      return;
    }
    toggleOff();
  }

  onMounted(() => {
    document.addEventListener("click", clickOutside, true);
  });

  onUnmounted(() => {
    document.removeEventListener("click", clickOutside, true);
  });
};

export default useClickOutside;
