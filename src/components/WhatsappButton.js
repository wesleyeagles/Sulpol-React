import { BsWhatsapp } from 'react-icons/bs'

export function WhatsappButton() {
    return (
        <a target='_blank' href="https://api.whatsapp.com/send?phone=5551995283277">
        <div className="fixed bottom-6 right-6 border-green-500 border z-50 w-[60px] h-[60px] rounded-full pulse-anima"></div>
        <div className="fixed bottom-6 right-6 border-green-500 border z-50 w-[60px] h-[60px] rounded-full pulse-anima2"></div>
        <div className="fixed bottom-6 right-6 border-green-500 border z-50 w-[60px] h-[60px] rounded-full pulse-anima3"></div>
        <div className="fixed bottom-6 right-6 bg-green-500 border z-50 w-[60px] h-[60px] rounded-full">
            <span className="flex w-full h-full justify-center items-center">
                <BsWhatsapp color="#FFF" size={30}/>
            </span>
        </div>
        
        </a>
    )
}

export default WhatsappButton