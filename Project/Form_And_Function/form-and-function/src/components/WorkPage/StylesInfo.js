import React from 'react'
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import { Paper } from "@material-ui/core";

const StylesInfo = () => {
  return (
    <div>
      <Typography variant="h5" align="center">
        What interior design style are you?
      </Typography>
      <Grid container direction="column" spacing={2}>
        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <h2>Traditional</h2>
            <p>
              Traditional is one of the oldest, and most common design styles so
              let’s start with that. The traditional style is rooted in heritage
              and traditional shapes and forms. You will often find pieces that
              have not changed at all since they were first created hundreds of
              years ago. It is all about conscious layering, formality, and
              incorporating pieces with structure and symmetry.
            </p>
          </Grid>

          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/traditional-NeONBRAND.jpg`}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/boho-AlyssaStrohmann.jpg`}
              />
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <h2>BOHO</h2>
            <p>
              Bohemian style (AKA as Boho to most), has become very popular in
              the last 5 years although its roots date back much further than
              that. Boho style is all about pulling together natural and organic
              elements into a very layered and collected look. You’ll find lots
              of caning, rattan, bamboo, and textiles in this style mixed with
              bright and saturated colors. It’s exotic, it’s playful and it’s
              very layered.
            </p>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <h2>Organic Modern</h2>
            <p>
              It’s neutral, it’s inviting and it’s casual. It relates to modern
              in its clean aesthetic and color palette but this style is all
              about layering neutral textiles and textures to create interest
              rather than introducing additional color. In this style, you’ll
              find lots of light-toned woods and relaxed textiles mixed with
              iconic lighting done in black, brass, and chrome.
            </p>
          </Grid>

          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/organic-modern-AveryKlein.jpg`}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/eclectic-TaylorHeery.jpg`}
              />
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <h2>Eclectic</h2>
            <p>
              For all intents and purposes, this could be called the slightly
              more refined cousin of Boho. It has a lot of similarities as far
              as the collected nature, the color combos, and the curated
              aesthetic. However, the pieces are less organic and more styled.
              Eclectic rooms could be filled with iconic pieces from just about
              every style, and when done right it all works together.
            </p>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <h2>Modern</h2>
            <p>
              On the opposite end of the spectrum from Boho or Eclectic, lies
              modern. Many people feel modern can be cold, stark, and sterile.
              But – in reality, modern style is very much rooted in square
              shapes and forms. You won’t find anything in this style with extra
              embellishments, and typically the style has a more neutral color
              palette with the occasional pop of color.
            </p>
          </Grid>
          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/modern-NaomiHebert.jpg`}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/modern-farmhouse-CollovHomeDesign.jpg`}
              />
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <h2>Modern Farmhouse</h2>
            <p>
              This style has become very mainstream in the last 5 years – thanks
              to the popular HGTV show Fixer Upper. The style uses a lot of
              found and salvaged objects but pulled together in a more modern
              and refined way. Rather than being too rustic and farmhouse-esque,
              it is more inspired by the latter. You’ll see plaids, blues,
              greens, and lots of white and black used in this style. It is very
              inviting and comfortable and has a slight tinge of traditional in
              it without being too formal. Think rustic yet refined.
            </p>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <h2>Glam</h2>
            <p>
              This style is filled with luxe textiles like leather, suede and
              velvet, and jewel-toned colors. It’s very high-end and polished
              and employs all the very finest of finishes. In this style, you’ll
              see a lot of minimal yet impactful touches that give it that posh
              and elevated look without having to add on too much of the extra
              detail and fill that you might find in a “Hollywood Regency”
              style.
            </p>
          </Grid>
          <Grid item lg={6}>
            <Paper>
              <Image src={`${process.env.PUBLIC_URL}/images/glam.jpg`} />
            </Paper>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/industrial-EvelynSemenyuk.jpg`}
              />
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <h2>Industrial</h2>
            <p>
              Just as the name states – the origins of this style lean more
              factory-esque and machine. It can lead a bit more masculine than
              the other styles as it uses a lot of metal, rustic wood, and
              leathers. However, the softness comes through its neutral color
              palette and the use of found objects which instantly can give the
              room some soul and character.
            </p>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <h2>Coastal</h2>
            <p>
              The name inherently gives you a sense of what the style holds.
              It’s all about the casual beachy atmosphere that you’ll find in
              many of the homes on the east coast. The style is all about
              bringing the natural elements of the coast inside your home. There
              are a lot of white-washed woods, blue tones, and plenty of white
              to help all that beachy sunshine bounce around the room.
            </p>
          </Grid>
          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/Coastal-JasonBriscoe.jpg`}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/mid-century-modern-ArtyomKabajev.jpg`}
              />
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <h2>Mid-Century Modern</h2>
            <p>
              With cues coming heavily from the ’50s and ’60s this style has
              become one of the most common and relatable styles for many
              people. The pieces designed during this period have stood the test
              of time and still remain fresh, modern, and relevant. The lines on
              many mid-century pieces are simple, clean, and minimal and are
              made out of warm woods with purposeful details and styling.
            </p>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <h2>Minimalist</h2>
            <p>
              A style that has similar cues to modern – minimalist, has very
              clean lines and simple shapes however the style lives by the
              mantra “less is more”. It uses a very, very refined had when
              selected items for rooms that fall into this style and everything
              in these rooms must play a purpose. You won’t find too many extra
              objects or layers.
            </p>
          </Grid>
          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/minimalist-Jean-PhilippeDelberghe.jpg`}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid item lg={12} container spacing={2}>
          <Grid item lg={6}>
            <Paper>
              <Image
                src={`${process.env.PUBLIC_URL}/images/scandinavian-SonnieHiles.jpg`}
              />
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <h2>Scandinavian</h2>
            <p>
              Hailing from its namesake, Scandinavian design is very much nordic
              in its roots. It has some similarities to organic modern but reads
              a bit more simplistic and minimal in its approach. When colors are
              used, it’s a very soft color palette of pastels balanced out with
              light-toned woods and lots of whites, creams, and tans. It is
              inviting, simple, and clean yet very warm and relaxed in its
              styling.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default StylesInfo;
