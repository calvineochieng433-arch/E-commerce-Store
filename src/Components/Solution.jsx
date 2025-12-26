import "./Styles.css";

export default function Solution() {
  return (
    <>
      <section className="solution-section">
        <div className="solution-intro">
          <h3>Hot off the press</h3>
          <h2>
            "Your solution to the most pressing skiing challenges, featuring the
            latest gear."
          </h2>
          <picture className="solution-font">
            <img
              src="https://media.yardsale.day/images/8l1z5dyl/production/ff55b7636818c0c123186cd36c7a0c3fa93741af-153x24.svg?w=1024&fm=webp&q=75&fit=crop&auto=format"
              alt="font"
            />
          </picture>
        </div>

        <div className="solution-image">
          <img
            src="https://media.yardsale.day/images/8l1z5dyl/production/bf939c46de3bbc266f247699c9d80bbda9be905c-2048x3089.jpg?rect=0,265,2048,2560&w=640&h=800&fm=webp&q=75&fit=crop&auto=format"
            alt="Skiing gears"
          />
        </div>
      </section>
      <h2 className="editorial-heading">
  Cheers to long days, short days, days you never want to end
  <span className="inline-img">
    <img
      src="https://media.yardsale.day/images/8l1z5dyl/production/f471b6ca58058048ba774d70eb41afc004dd9df5-2300x3411.jpg?rect=0,556,2300,2300&w=150&h=150&fm=webp&q=75&fit=crop&auto=format"
      alt=""
    />
  </span>,
  “type 2 fun” days, travel days
  <span className="inline-img">
    <img
      src="https://media.yardsale.day/images/8l1z5dyl/production/3342d36473ae89c743454deee7dcea4d2e1d1d7f-1720x1148.png?rect=286,0,1148,1148&w=150&h=150&fm=webp&q=75&fit=crop&auto=format"
      alt=""
    />
  </span>,
  bluebird days
  <span className="inline-img">
    <img
      src="https://media.yardsale.day/images/8l1z5dyl/production/e98e56e9e1154c9293665b1b04657e210fe0e804-2400x3600.jpg?rect=0,600,2400,2400&w=150&h=150&fm=webp&q=75&fit=crop&auto=format"
      alt=""
    />
  </span>
  and all the days in between.
</h2>
    </>
  );
}
