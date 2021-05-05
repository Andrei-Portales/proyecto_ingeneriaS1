import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './inves_cienti.css';

function inves_cienti() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT">Investigación Científica</h1>
                    <p>
                        <br></br><br></br>
                        La investigación científica es un proceso ordenado y sistemático de indagación en el cual,
                        mediante la aplicación rigurosa de un conjunto de métodos y criterios, se persigue el estudio,
                        análisis o indagación en torno a un asunto o tema, con el objetivo subsecuente de aumentar,
                        ampliar o desarrollar el conocimiento que se tiene de este. <br></br><br></br>

                        El objetivo fundamental de la investigación científica es buscar soluciones a problemas específicos:
                        explicar fenómenos, desarrollar teorías, ampliar conocimientos, establecer principios, 
                        reformular planteamientos, refutar resultados, etc. <br></br><br></br>

                        La investigación científica consta de tres elementos indispensables:

                        <li>Objeto de investigación. Se refiere al asunto o tema sobre el que se va a investigar y que será objeto de análisis pormenorizado.</li>
                        <li>Medio. Conjunto de recursos, métodos y técnicas adecuados para el tipo de investigación y el tema que se va a abordar.</li>
                        <li>Finalidad de la investigación. Se refiere a las razones que motivan la investigación, es decir, a su propósito último. Por ejemplo, qué beneficios aportará a la sociedad determinado conocimiento.</li>
                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/zzHu-yqdlz0'
                            className='react-player'
                            playing
                            width='100%'
                            height='100%'
                            controls='true'
                        />
                    </div>
                </Col>
            </Row>


        </Container>
    )
}

export default inves_cienti