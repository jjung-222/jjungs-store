'use client'
import Image from 'next/image'
import React, {useState} from 'react'

import LogoPath from '@/assets/colorful.svg'
import { useRouter } from 'next/router'

const LoginClient = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoad, setIsLoad] = useState(false)
    const [isAutoLogin, setIsAutoLogin] = useState(false)


    useRouter

    
  return (
    <section>
        <div>
            <h1>
                <img />

                {/* 자동으로 최적화 해서 보여줌 */}
                <Image src={LogoPath} alt='logo'/>
            </h1>
            <form>
                {/* Input */}
                <div>
                    {/* 자동로그인, 비밀번호 수정 */}
                </div>
                <div>
                    {/* Button */}
                    <div>
                         {/* Button */}
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default LoginClient