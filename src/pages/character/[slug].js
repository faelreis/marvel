import { useRouter } from 'next/router'

export default function PageCharacter(){
    const router = useRouter();
    return(
        <h1>Página personagem: {router.query.slug}</h1>
    )
}