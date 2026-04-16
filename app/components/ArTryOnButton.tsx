'use client';

export function ArTryOnButton() {
  const openAr = async () => {
    if (navigator.xr) {
      alert('WebXR is available. Connect your AR-compatible device to launch your AR session.');
      return;
    }

    window.open('https://developer.apple.com/augmented-reality/quick-look/', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={openAr}
      className="rounded-xl border border-sky-300 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-200"
    >
      AR Try-On
    </button>
  );
}
