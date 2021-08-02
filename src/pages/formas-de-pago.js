import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  HomeItem,
  HomeSubTittle
} from "@components/home";
import pagos from "./../images/pagos.jpg"
import BCP from "@images/folder/bcp.svg"
import BBVA from "@images/folder/bbva.svg"
import {
  HomeContent,
  HomeColumn
} from "./../components/home/styled"

const GalleryPage = () => (
  <Layout>
    <SEO title="Galería" />

    <HomeContent>
      <HomeColumn>
        <HomeSubTittle title={'FORMAS DE PAGO'} />
      </HomeColumn>
      <HomeColumn>
        <HomeItem
          image={pagos}
          description={"Aceptamos todas las tarjetas"}
          width={"33.3%"}
        />

        <HomeItem
          title={"BANCO CONTINENTAL"}
          icon={BBVA}
          width={"66.6%"}
        >
          <p>
          CTA AHORROS <br/> 0011-0314-0200535895 <br/> CESAR RUIZ VELA
          </p>
        </HomeItem>
        <HomeItem
          title={`BCP`}
          icon={BCP}
          width={"66.6%"}
          >
          <p>
          CUENTA CORRIENTE <br/>
            SHESHIN E.I.R.L <br/>
            435-2492093-0-94
          </p>
          <p>
            CUENTA INTERBANCARIO <br/>
            002-43500249209309468
          </p>
        </HomeItem>
      </HomeColumn>
    </HomeContent>
  </Layout>
)

export default GalleryPage