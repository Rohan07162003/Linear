import { AlanLogo } from "./logos/alan.jsx";
import { ArcLogo } from "./logos/arc.jsx";
import { CashAppLogo } from "./logos/cashapp.jsx";
import { DescriptLogo } from "./logos/descript.jsx";
import { LoomLogo } from "./logos/loom.jsx";
import { MercuryLogo } from "./logos/mercury.jsx";
import { OpenSeaLogo } from "./logos/opensea.jsx";
import { PitchLogo } from "./logos/pitch.jsx";
import { RampLogo } from "./logos/ramp.jsx";
import { RaycastLogo } from "./logos/raycast.jsx";
import { RetoolLogo } from "./logos/retool.jsx";
import { VercelLogo } from "./logos/vercel.jsx";

const Clients = () => {
    return (
        <div>
            <p className="mb-12 text-lg text-white md:text-xl text-center">
                <span className="text-primary-text">Powering the world’s best product teams.</span>
                <br className="hidden md:block" /> From next-gen startups to established
                enterprises.
            </p>
            <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
                <RampLogo />
                <LoomLogo className="hidden md:block" />
                <VercelLogo />
                <DescriptLogo className="hidden md:block" />
                <CashAppLogo />
                <RaycastLogo />
                <MercuryLogo />
                <RetoolLogo />
                <AlanLogo className="hidden md:block" />
                <ArcLogo className="hidden md:block" />
                <OpenSeaLogo className="hidden md:block" />
                <PitchLogo className="hidden md:block" />
            </div>
        </div>

    )
}

export default Clients