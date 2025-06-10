import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Design System/Colors/Common",
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
        <h2 className="text-content text-lg font-bold">Hiko Red</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-hiko-red-50 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#fadcd6</span>
            <span className="text-center">50</span>
          </div>

          <div className="bg-hiko-red-100 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#f2baae</span>
            <span className="text-center">100</span>
          </div>

          <div className="bg-hiko-red-200 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#e79888</span>
            <span className="text-center">200</span>
          </div>

          <div className="bg-hiko-red-300 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#d97663</span>
            <span className="text-center">300</span>
          </div>

          <div className="bg-hiko-red-400 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#c95340</span>
            <span className="text-center">400</span>
          </div>

          <div className="bg-hiko-red-500 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#B6291E</span>
            <span className="text-center">500</span>
          </div>

          <div className="bg-hiko-red-600 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#96261b</span>
            <span className="text-center">600</span>
          </div>

          <div className="bg-hiko-red-700 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#772217</span>
            <span className="text-center">700</span>
          </div>

          <div className="bg-hiko-red-800 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#5a1d14</span>
            <span className="text-center">800</span>
          </div>

          <div className="bg-hiko-red-900 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#3e170f</span>
            <span className="text-center">900</span>
          </div>

          <div className="bg-hiko-red-950 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#241008</span>
            <span className="text-center">950</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Hiko Blue</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-hiko-blue-50 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#e6f0ff</span>
            <span className="text-center">50</span>
          </div>

          <div className="bg-hiko-blue-100 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#cce0ff</span>
            <span className="text-center">100</span>
          </div>

          <div className="bg-hiko-blue-200 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#99c2ff</span>
            <span className="text-center">200</span>
          </div>

          <div className="bg-hiko-blue-300 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#66a3ff</span>
            <span className="text-center">300</span>
          </div>

          <div className="bg-hiko-blue-400 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#3385ff</span>
            <span className="text-center">400</span>
          </div>

          <div className="bg-hiko-blue-500 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#0066ff</span>
            <span className="text-center">500</span>
          </div>

          <div className="bg-hiko-blue-600 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#0052cc</span>
            <span className="text-center">600</span>
          </div>

          <div className="bg-hiko-blue-700 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#003d99</span>
            <span className="text-center">700</span>
          </div>

          <div className="bg-hiko-blue-800 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#002966</span>
            <span className="text-center">800</span>
          </div>

          <div className="bg-hiko-blue-900 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#001433</span>
            <span className="text-center">900</span>
          </div>

          <div className="bg-hiko-blue-950 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#00001a</span>
            <span className="text-center">950</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Hiko Green</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-hiko-green-50 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#e6f7e6</span>
            <span className="text-center">50</span>
          </div>

          <div className="bg-hiko-green-100 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#ccefcc</span>
            <span className="text-center">100</span>
          </div>

          <div className="bg-hiko-green-200 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#99df99</span>
            <span className="text-center">200</span>
          </div>

          <div className="bg-hiko-green-300 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#66cf66</span>
            <span className="text-center">300</span>
          </div>

          <div className="bg-hiko-green-400 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#33bf33</span>
            <span className="text-center">400</span>
          </div>

          <div className="bg-hiko-green-500 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#00af00</span>
            <span className="text-center">500</span>
          </div>

          <div className="bg-hiko-green-600 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#008c00</span>
            <span className="text-center">600</span>
          </div>

          <div className="bg-hiko-green-700 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#006900</span>
            <span className="text-center">700</span>
          </div>

          <div className="bg-hiko-green-800 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#004600</span>
            <span className="text-center">800</span>
          </div>

          <div className="bg-hiko-green-900 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#002300</span>
            <span className="text-center">900</span>
          </div>

          <div className="bg-hiko-green-950 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#001100</span>
            <span className="text-center">950</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Hiko Yellow</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-hiko-yellow-50 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#fff9e6</span>
            <span className="text-center">50</span>
          </div>

          <div className="bg-hiko-yellow-100 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#fff3cc</span>
            <span className="text-center">100</span>
          </div>

          <div className="bg-hiko-yellow-200 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#ffe799</span>
            <span className="text-center">200</span>
          </div>

          <div className="bg-hiko-yellow-300 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#ffdb66</span>
            <span className="text-center">300</span>
          </div>

          <div className="bg-hiko-yellow-400 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#ffcf33</span>
            <span className="text-center">400</span>
          </div>

          <div className="bg-hiko-yellow-500 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#ffc300</span>
            <span className="text-center">500</span>
          </div>

          <div className="bg-hiko-yellow-600 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#cc9c00</span>
            <span className="text-center">600</span>
          </div>

          <div className="bg-hiko-yellow-700 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#997500</span>
            <span className="text-center">700</span>
          </div>

          <div className="bg-hiko-yellow-800 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#664e00</span>
            <span className="text-center">800</span>
          </div>

          <div className="bg-hiko-yellow-900 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#332700</span>
            <span className="text-center">900</span>
          </div>

          <div className="bg-hiko-yellow-950 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#1a1300</span>
            <span className="text-center">950</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Hiko Orange</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-hiko-orange-50 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#ffebdc</span>
            <span className="text-center">50</span>
          </div>

          <div className="bg-hiko-orange-100 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#fdd7ba</span>
            <span className="text-center">100</span>
          </div>

          <div className="bg-hiko-orange-200 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#f9c398</span>
            <span className="text-center">200</span>
          </div>

          <div className="bg-hiko-orange-300 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#f4af77</span>
            <span className="text-center">300</span>
          </div>

          <div className="bg-hiko-orange-400 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#ec9c56</span>
            <span className="text-center">400</span>
          </div>

          <div className="bg-hiko-orange-500 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#e38933</span>
            <span className="text-center">500</span>
          </div>

          <div className="bg-hiko-orange-600 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#ba712c</span>
            <span className="text-center">600</span>
          </div>

          <div className="bg-hiko-orange-700 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#925a26</span>
            <span className="text-center">700</span>
          </div>

          <div className="bg-hiko-orange-800 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#6c431f</span>
            <span className="text-center">800</span>
          </div>

          <div className="bg-hiko-orange-900 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#492e18</span>
            <span className="text-center">900</span>
          </div>

          <div className="bg-hiko-orange-950 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#281b0f</span>
            <span className="text-center">950</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Hiko Purple</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-hiko-purple-50 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#f2e6ff</span>
            <span className="text-center">50</span>
          </div>

          <div className="bg-hiko-purple-100 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#e6ccff</span>
            <span className="text-center">100</span>
          </div>

          <div className="bg-hiko-purple-200 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#cc99ff</span>
            <span className="text-center">200</span>
          </div>

          <div className="bg-hiko-purple-300 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#b366ff</span>
            <span className="text-center">300</span>
          </div>

          <div className="bg-hiko-purple-400 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#9933ff</span>
            <span className="text-center">400</span>
          </div>

          <div className="bg-hiko-purple-500 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#8000ff</span>
            <span className="text-center">500</span>
          </div>

          <div className="bg-hiko-purple-600 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#6600cc</span>
            <span className="text-center">600</span>
          </div>

          <div className="bg-hiko-purple-700 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#4d0099</span>
            <span className="text-center">700</span>
          </div>

          <div className="bg-hiko-purple-800 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#330066</span>
            <span className="text-center">800</span>
          </div>

          <div className="bg-hiko-purple-900 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#1a0033</span>
            <span className="text-center">900</span>
          </div>

          <div className="bg-hiko-purple-950 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#0d001a</span>
            <span className="text-center">950</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-content text-lg font-bold">Hiko Neutral</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-hiko-neutral-50 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#fafafa</span>
            <span className="text-center">50</span>
          </div>

          <div className="bg-hiko-neutral-100 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#f5f5f5</span>
            <span className="text-center">100</span>
          </div>

          <div className="bg-hiko-neutral-200 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#e5e5e5</span>
            <span className="text-center">200</span>
          </div>

          <div className="bg-hiko-neutral-300 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#d4d4d4</span>
            <span className="text-center">300</span>
          </div>

          <div className="bg-hiko-neutral-400 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#a3a3a3</span>
            <span className="text-center">400</span>
          </div>

          <div className="bg-hiko-neutral-500 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-black">
            <span className="text-center">#737373</span>
            <span className="text-center">500</span>
          </div>

          <div className="bg-hiko-neutral-600 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#525252</span>
            <span className="text-center">600</span>
          </div>

          <div className="bg-hiko-neutral-700 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#404040</span>
            <span className="text-center">700</span>
          </div>

          <div className="bg-hiko-neutral-800 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#262626</span>
            <span className="text-center">800</span>
          </div>

          <div className="bg-hiko-neutral-900 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#171717</span>
            <span className="text-center">900</span>
          </div>

          <div className="bg-hiko-neutral-950 flex size-24 flex-col items-center justify-center rounded-lg text-xs font-bold uppercase text-white">
            <span className="text-center">#0a0a0a</span>
            <span className="text-center">950</span>
          </div>
        </div>
      </div>
    </div>
  ),
};
