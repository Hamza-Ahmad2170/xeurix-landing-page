import "./css/partyPopper.css";

type Props = {
  show: boolean;
  footer?: boolean;
};

// const PartyPopper = ({ show, footer }) => {
const PartyPopper = ({ footer, show }: Props) => {
  return (
    <div
      className={`PartyPopperWrapper ${show ? "showMypopper" : ""}`}
      id={footer ? "" : "partyPoper"}
    >
      <div className="leftCanon" id="leftCanon">
        <div className="cannon">
          <div className="cannon__path cannon__path--sm cannon__path--angle-2">
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-1" />
            <div className="cannon__confetti-spacer" />
          </div>
          <div className="cannon__path cannon__path--md cannon__path--angle-1">
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-4" />
            <div className="cannon__confetti-spacer" />
          </div>
          <div className="cannon__path cannon__path--lg cannon__path--angle0">
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti-spacer" />
          </div>
          <div className="cannon__path cannon__path--md cannon__path--angle1">
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti-spacer" />
          </div>
          <div className="cannon__path cannon__path--sm cannon__path--angle2">
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-4" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti-spacer" />
          </div>
        </div>
      </div>
      <div className="rightCanon" id="rightCanon">
        <div className="cannon">
          <div className="cannon__path cannon__path--sm cannon__path--angle-2">
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-1" />
            <div className="cannon__confetti-spacer" />
          </div>
          <div className="cannon__path cannon__path--md cannon__path--angle-1">
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-4" />
            <div className="cannon__confetti-spacer" />
          </div>
          <div className="cannon__path cannon__path--lg cannon__path--angle0">
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti-spacer" />
          </div>
          <div className="cannon__path cannon__path--md cannon__path--angle1">
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti-spacer" />
          </div>
          <div className="cannon__path cannon__path--sm cannon__path--angle2">
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3" />
            <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-4" />
            <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1" />
            <div className="cannon__confetti-spacer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyPopper;
