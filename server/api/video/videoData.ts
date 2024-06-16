import { type Video, type VideoControler } from "../../../types/video";
import crypto from "crypto"
export const videoControler:VideoControler = {
    current_video_index:0,
    video_status:0
};
export const videoList:Video[] = [
    {
        id:crypto.randomUUID(),
        url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_01.mp4",
        branch_A_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_01_A.mp4",
        branch_B_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_01_B.mp4",
        vote_A:0,
        vote_B:0
    },
    {
        id:crypto.randomUUID(),
        url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_02.mp4",
        branch_A_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_02_A.mp4",
        branch_B_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_02_B.mp4",
        vote_A:0,
        vote_B:0
    },
    {
        id:crypto.randomUUID(),
        url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_03.mp4",
        branch_A_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_03_A.mp4",
        branch_B_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_03_B.mp4",
        vote_A:0,
        vote_B:0
    },
    {
        id:crypto.randomUUID(),
        url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_04.mp4",
        branch_A_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_04_A.mp4",
        branch_B_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_04_B.mp4",
        vote_A:0,
        vote_B:0
    },
    {
        id:crypto.randomUUID(),
        url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_05.mp4",
        branch_A_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_05_A.mp4",
        branch_B_url:"https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_05_B.mp4",
        vote_A:0,
        vote_B:0
    },
];