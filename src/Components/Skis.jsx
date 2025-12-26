import "./Styles.css";
import { useState } from "react";

export default function Skis() {
  const SkiData = {
    Coralred: [
      "https://media.yardsale.day/images/8l1z5dyl/production/40a6434cb663f098ddbd477148151c434a089fea-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/6a2c722424734136dad4b189618ca9851ab3a541-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/bfb67ee3ac477ef09e9037798899fde8fcb42d47-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/2e678b99a955a41463a5e67701ca0527c329e0c2-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/24f103a78efb9297ef6131f097a0e70d871ee299-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    LightBeige: [
      "https://media.yardsale.day/images/8l1z5dyl/production/53541893d7d81b286cb9a720dadc5608db8fe99f-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/a8b6d658155c9182d930fe9f70dd05e04c9d20ed-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/416afbd446d96a5afb12baf827882de8ebb816ce-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/fce6ef8ce3550543967e786c0117ce9e14affc91-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/cf8aa89b6799d8a9d14ce994694cce30ea76f152-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    Mustard: [
      "https://media.yardsale.day/images/8l1z5dyl/production/b29ee31160cfc76c288bc59b6df0123d9e6c1522-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/50ad1e0e61bb5278fb8f8f856c1733b08245be73-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/dbfa7552388916a5527ee2acf40fe80baa79ad20-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/2635e93280631ac8529ecf51017c25489180f63a-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/176cbc56f23fec4c2b70cd0b77e0601db5fe710d-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    Pink: [
      "https://media.yardsale.day/images/8l1z5dyl/production/5fcfd94c64ebceb597077691d9c05f574e92d0ab-1500x1500.tif?rect=150,0,1200,1500&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/59e28c59ad30bd6e5b88c8c9b6b8193a415343e7-1500x1500.tif?rect=150,0,1200,1500&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/43a5fce7718a674ba3282d666a30df5bf7cb7bfe-1500x1500.tif?rect=150,0,1200,1500&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/4b56adb06fc7f75a38b67259e4cc649233286b92-1500x1500.tif?rect=150,0,1200,1500&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/d0b1fb2bc21966cac2c1f37e7f10a3bc9e6c1a98-1500x1500.tif?rect=150,0,1200,1500&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    MediumBlue: [
      "https://media.yardsale.day/images/8l1z5dyl/production/8129299262be35089818fd0962833fcc4445417e-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/5a78a95af7617f3a000e4676e597c166dbb53680-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/ad8740e5be2412208d353ba8bcc06100dc11ce7d-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/93fe802f81e2603464e8efaf103acb8d4f3607b2-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/8a3e649dd79fcbb7288b2112532577c77cc4a6eb-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    SageGreen: [
      "https://media.yardsale.day/images/8l1z5dyl/production/ce1982855e89609af2b3845c147605de2ee45fc5-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/8c51618fa76dbd861dc0421b88b0e59bccde9c2a-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/f00ffe57f4eadb2b57e15281e167f54d970db729-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/1768a056c2d60a5c1d10031a06d7a72592f10e07-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/5afd899843fa6d83af133d4c3d94e49e09504098-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    DarkGray: [
      "https://media.yardsale.day/images/8l1z5dyl/production/e1ff5294f5b30ed36a5968913db9118b2b6b0fbe-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/45bc196f7160c09cda4344dabe329de4607b2356-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/ba91fb2bfe7febdab4c9a00a86b1ddab569a1874-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/7fd847f6411dc8566ce5216df819b0e0fcf10bc8-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/c07240c75fb0c82365089178a9b27fd65903b3d9-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ]
  };

  const skiColor = {
    Coralred: "#d85443",
    LightBeige: "#f2f0e6ff",
    Mustard: "#EDDB94",
    Pink: "#E27EB4",
    MediumBlue: "#487ea2",
    SageGreen: "#69806d",
    DarkGray: "#292929"
  };

  const [selectedColor, setSelectedColor] = useState("Coralred");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % SkiData[selectedColor].length);

  const prevImage = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + SkiData[selectedColor].length) %
        SkiData[selectedColor].length
    );

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentIndex(0);
  };

  return (
    <div className="ski-container">
      <div className="product-card">
        <div className="image-container">
          <button className="arrow left" onClick={prevImage}>
            &lt;
          </button>

          <img src={SkiData[selectedColor][currentIndex]} alt="Skis" />

          <button className="arrow right" onClick={nextImage}>
            &gt;
          </button>
        </div>

        <div className="details">
          <h2>P1 Resort Poles</h2>
          <p>Our calssic and award-winning magnetic resort ski poles</p>
          <span className="price">$179.00</span>
        </div>

        <div className="colors">
          {Object.keys(skiColor).map((color) => (
            <div
              key={color}
              className={`color-swatch ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: skiColor[color] }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
