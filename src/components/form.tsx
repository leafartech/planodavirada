'use client'

import { useEffect } from "react";

export function Form() {

    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://giogarcia.activehosted.com/f/embed.php?id=2';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            document.body.appendChild(script);
            cont++;
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                let url = window.location.href
                let params = url?.split('?')[1]

                let utm_source = params?.split('&').find(item => item.includes('utm_source'))?.split('=')[1]
                let utm_medium = params?.split('&').find(item => item.includes('utm_medium'))?.split('=')[1]
                let utm_campaign = params?.split('&').find(item => item.includes('utm_campaign'))?.split('=')[1]
                let utm_content = params?.split('&').find(item => item.includes('utm_content'))?.split('=')[1]
                let utm_term = params?.split('&').find(item => item.includes('utm_term'))?.split('=')[1]
                
                const inpt1 = document.querySelector('[data-name="utm_source"]') as HTMLInputElement // utmsource
                const inpt2 = document.querySelector('[data-name="utm_medium"]') as HTMLInputElement // utmmedium
                const inpt3 = document.querySelector('[data-name="utm_campaign"]') as HTMLInputElement // utmcampaign
                const inpt4 = document.querySelector('[data-name="utm_content"]') as HTMLInputElement // utmcontent
                const inpt5 = document.querySelector('[data-name="utm_term"]') as HTMLInputElement // utmterm

                inpt1.value = utm_source || ''
                inpt2.value = utm_medium || ''
                inpt3.value = utm_campaign || ''
                inpt4.value = utm_content || ''
                inpt5.value = utm_term || ''
            }, 1500)
        }
    }, [cont])

    return (
        <div className="w-full h-[204px]">
            <div id="_form_2" className="_form_2"></div>
        </div>
    )
}