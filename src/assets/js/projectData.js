import OtherImage from "../images/projects/other.png";

import SBFullstackImage from "../images/projects/sb-fullstack.png";
import WPFullstackImage from "../images/projects/wp-fullstack.png";
import GeopardyFullstackImage from "../images/projects/geopardy-fullstack.png";
import YukPrivateFullstackImage from "../images/projects/yukprivate-fullstack.png";

import CareertoolsImage from "../images/projects/careertools.png";
import ExalterImage from "../images/projects/exalter.png";
import InventifyImage from "../images/projects/inventify.png";
import AtsiraImage from "../images/projects/atsira.png";

export const ProjectData = {
    "type": "Project",
    "Collections": [
        {
            type: "Fullstack Dev",
            id: "1",
            properties:
            [
                {
                    id: 1,
                    image: WPFullstackImage,
                    title: "Warehouse Project",
                    year: 2023
                },
                {
                    id: 2,
                    image: YukPrivateFullstackImage,
                    title: "YukPrivate",
                    year: 2022
                },
                {
                    id: 3,
                    image: SBFullstackImage,
                    title: "Start Business",
                    year: 2023
                },
                {
                    id: 4,
                    image: GeopardyFullstackImage,
                    title: "Geopardy",
                    year: 2024
                },
                {
                    id: 5,
                    image: OtherImage,
                    title: "Other",
                    year: "2022-Present"
                }
            ]
        },
        {
            type: "FrontEnd Dev",
            id: "2",
            properties:
            [
                {
                    id: 1,
                    image: CareertoolsImage,
                    title: "Careertools ID",
                    year: 2024
                },
                {
                    id: 2,
                    image: InventifyImage,
                    title: "Inventify Center",
                    year: 2024
                },
                {
                    id: 3,
                    image: ExalterImage,
                    title: "Exalter Students",
                    year: 2024
                },
                {
                    id: 4,
                    image: AtsiraImage,
                    title: "AtsiraEssence",
                    year: 2023
                },
                {
                    id: 5,
                    image: OtherImage,
                    title: "Other",
                    year: "2022-Present"
                }
            ]
        },
    ]
};