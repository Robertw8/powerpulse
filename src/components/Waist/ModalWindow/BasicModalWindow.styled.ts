import styled from '@emotion/styled';
import { palette } from '../../../styles/index';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* width: 335px;
    height: 788px; */
    flex-shrink: 0;
    border-radius: ${palette.radiuses.primary};
    border: 1px solid rgba(239, 237, 232, 0.20);
    background: #10100F;
    overflow: hidden;
    overflow-y: auto;
    transition: opacity 0.3s;
    z-index: 999;
`;

export const MadalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const MadalContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    width: 100%;
    max-width: 600px;
    border-radius: 20px;
    border-color: #ffff;
    padding: 20px;
    transform: translateY(-50px);
    transition: opacity 0.3s, transform 0.3s;
`;

export const Image = styled.div`
    /* display: flex; */
    width: 270px;
    height: 226px;
    padding: 45px 105px;
    /* justify-content: center;
    align-items: center; */
    margin: 0 auto;
    gap: 32px;
    margin-bottom: 32px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.20);
    background: linear-gradient(0deg, rgba(4, 4, 4, 0.20) 0%, rgba(4, 4, 4, 0.20) 100%), url(<path-to-image>), lightgray 0px -17.5px / 100% 119.469% no-repeat;
`;
export const Timer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 14px;
`;

export const BurnedCal = styled.p`
    color: rgba(239, 237, 232, 0.30);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
`;

export const BurnedInformName = styled.span`
    color: ${palette.colors.orange};
`;