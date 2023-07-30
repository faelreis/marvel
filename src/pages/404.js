import Image from 'next/image'
import errorImage from '../../public/error-message.png'

export default function Custom404() {
    return (
      <>
        <h2>Whoops, essa página sumiu</h2>
        <p>OHHH, parece que não conseguimos encontrar a página que você está procurando. Tente voltar à página anterior ou consulte nossa Central de Ajuda para obter mais informações</p>
        <button>Voltar</button>
        <Image
          src={errorImage}
          alt="Error 404"
        />
      </>
    )
  }