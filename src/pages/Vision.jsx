import React from 'react';
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Vision = () => {
    return (
        <div>
            <Menu />
            
            <main style={{ padding: "2rem" }}>
                <h1>Visión de MaFiEst</h1>
                <p>
                    Para el año 2030, MaFiEst habrá implementado las áreas de Física y Estadística, 
                  y será reconocida como una plataforma educativa innovadora y confiable, 
                  que apoya el éxito académico de estudiantes de secundaria a nivel nacional mediante 
                  contenido pregrabado de calidad y acompañamiento presencial cuando sea requerido.
                </p>
            </main>
            
            <Footer />
        </div>
    )
}

export default Vision;
