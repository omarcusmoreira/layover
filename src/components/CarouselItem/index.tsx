import WomanWithMaskAndLayoverFooter from '../../assets/images/WomanWithMaskAndLayoverFooter.svg'
import fiveStarImg from '../../assets/images/five-stars.svg'
import quotationMarkImg from '../../assets/images/inital-client-avaliation.svg'
import { Typography } from '@mui/material'

interface CarouselItemProps{
    text: string,
    name: string,
    title: string,
    companyName: string
}

export function CarouselItem({ text, name, title, companyName }: CarouselItemProps) {
    return (
        <div className='carousel-item'>
            <div className='left-side'>
                <img src={WomanWithMaskAndLayoverFooter} alt='' />
            </div>
            <div className='right-side'>
                <img src={quotationMarkImg} alt='' />
                <Typography variant='h5' className='mb15'>
                    {title}
                </Typography>
                <Typography variant='h6' className='mb15'>
                    {text}
                </Typography>
                <img src={fiveStarImg} alt='' className='mb5'/>
                <Typography variant='body1'>
                    {name}
                </Typography>
                <Typography variant='subtitle2'>
                    {companyName}
                </Typography>
            </div>
        </div>
    )
}