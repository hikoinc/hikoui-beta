import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Design System/Colors/Semantic",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <div className="mx-auto flex flex-col gap-16 px-8 py-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Background</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-background border-divider text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold">
            Default
          </div>

          <div className="bg-background-contrast text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Contrast
          </div>

          <div className="bg-background-high-contrast text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            High Contrast
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Foreground</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-foreground border-foreground-contrast text-background flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold">
            Default
          </div>

          <div className="bg-foreground-contrast text-background flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Contrast
          </div>

          <div className="bg-foreground-high-contrast text-background flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            High Contrast
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Primary</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-primary border-primary-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold text-white">
            Default
          </div>

          <div className="bg-primary-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            Contrast
          </div>

          <div className="bg-primary-high-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            High Contrast
          </div>

          <div className="bg-primary-muted text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Muted
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Secondary</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-secondary border-secondary-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold text-white">
            Default
          </div>

          <div className="bg-secondary-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            Contrast
          </div>

          <div className="bg-secondary-high-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            High Contrast
          </div>

          <div className="bg-secondary-muted text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Muted
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Accent</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-accent border-accent-contrast text-background flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold">
            Default
          </div>

          <div className="bg-accent-contrast text-background flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Contrast
          </div>

          <div className="bg-accent-high-contrast text-background flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            High Contrast
          </div>

          <div className="bg-accent-muted text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Muted
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Success</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-success border-success-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold text-white">
            Default
          </div>

          <div className="bg-success-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            Contrast
          </div>

          <div className="bg-success-high-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            High Contrast
          </div>

          <div className="bg-success-muted text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Muted
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Info</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-info border-info-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold text-white">
            Default
          </div>

          <div className="bg-info-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            Contrast
          </div>

          <div className="bg-info-high-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            High Contrast
          </div>

          <div className="bg-info-muted text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Muted
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Warning</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-warning border-warning-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold text-white">
            Default
          </div>

          <div className="bg-warning-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            Contrast
          </div>

          <div className="bg-warning-high-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            High Contrast
          </div>

          <div className="bg-warning-muted text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Muted
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Danger</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-danger border-danger-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold text-white">
            Default
          </div>

          <div className="bg-danger-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            Contrast
          </div>

          <div className="bg-danger-high-contrast flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold text-white">
            High Contrast
          </div>

          <div className="bg-danger-muted text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Muted
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Content</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-content border-content-contrast text-background flex size-24 flex-col items-center justify-center gap-1 rounded-lg border text-xs font-bold">
            Default
          </div>

          <div className="bg-content-contrast text-background flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Contrast
          </div>

          <div className="bg-content-high-contrast text-background flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            High Contrast
          </div>

          <div className="bg-content-muted text-content flex size-24 flex-col items-center justify-center gap-1 rounded-lg text-xs font-bold">
            Muted
          </div>
        </div>
      </div>
    </div>
  ),
};
