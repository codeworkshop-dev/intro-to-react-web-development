import React from "react";

function BlogDetail({ posts, match }) {
  const { slug } = match.params;
  const post = posts.find(post => post.slug === slug);
  return (
    <div className="bg-gray-100 container mx-auto m-8 p-8 ">
      <h1 className="text-6xl m-2 font-serif">{post.title}</h1>
      <div className="font-serif leading-relaxed text-lg max-w-3xl ">
        <p className="p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex quo, id
          quod omnes expetunt, beate vivendi ratio inveniri et comparari potest.
          Philosophi autem in suis lectulis plerumque moriuntur. Duo Reges:
          constructio interrete. Quae quidem vel cum periculo est quaerenda
          vobis; Quos quidem tibi studiose et diligenter tractandos magnopere
          censeo. Videmus igitur ut conquiescere ne infantes quidem possint. Que
          Manilium, ab iisque M. Quid ergo attinet gloriose loqui, nisi
          constanter loquare? Quid est enim aliud esse versutum?{" "}
        </p>

        <p className="p-4">
          Quando enim Socrates, qui parens philosophiae iure dici potest,
          quicquam tale fecit? Est enim effectrix multarum et magnarum
          voluptatum. Nam adhuc, meo fortasse vitio, quid ego quaeram non
          perspicis. Nam memini etiam quae nolo, oblivisci non possum quae volo.
          Tertium autem omnibus aut maximis rebus iis, quae secundum naturam
          sint, fruentem vivere. Ex rebus enim timiditas, non ex vocabulis
          nascitur. Fortasse id optimum, sed ubi illud: Plus semper voluptatis?
          Haec para/doca illi, nos admirabilia dicamus. Ut id aliis narrare
          gestiant? Hi curatione adhibita levantur in dies, valet alter plus
          cotidie, alter videt.{" "}
        </p>

        <p className="p-4">
          Quid enim possumus hoc agere divinius? Sed quanta sit alias, nunc
          tantum possitne esse tanta. Nonne videmus quanta perturbatio rerum
          omnium consequatur, quanta confusio? Quippe: habes enim a rhetoribus;
          Hoc Hieronymus summum bonum esse dixit. Nam prius a se poterit quisque
          discedere quam appetitum earum rerum, quae sibi conducant, amittere.
          Stoici autem, quod finem bonorum in una virtute ponunt, similes sunt
          illorum; Obsecro, inquit, Torquate, haec dicit Epicurus?{" "}
        </p>

        <p className="p-4">
          Hic ambiguo ludimur. Aut haec tibi, Torquate, sunt vituperanda aut
          patrocinium voluptatis repudiandum. Audax negotium, dicerem impudens,
          nisi hoc institutum postea translatum ad philosophos nostros esset.{" "}
        </p>

        <p className="p-4">
          Si quae forte-possumus. Philosophi autem in suis lectulis plerumque
          moriuntur. Tertium autem omnibus aut maximis rebus iis, quae secundum
          naturam sint, fruentem vivere.{" "}
        </p>

        <p className="p-4">
          Contemnit enim disserendi elegantiam, confuse loquitur. Idque
          testamento cavebit is, qui nobis quasi oraculum ediderit nihil post
          mortem ad nos pertinere? Putabam equidem satis, inquit, me dixisse.
          Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus;
          Tecum optime, deinde etiam cum mediocri amico. Cur tantas regiones
          barbarorum pedibus obiit, tot maria transmisit? Audax negotium,
          dicerem impudens, nisi hoc institutum postea translatum ad philosophos
          nostros esset.{" "}
        </p>

        <p className="p-4">
          Qua tu etiam inprudens utebare non numquam. Plane idem, inquit, et
          maxima quidem, qua fieri nulla maior potest. Luxuriam non reprehendit,
          modo sit vacua infinita cupiditate et timore. Qui autem diffidet
          perpetuitati bonorum suorum, timeat necesse est, ne aliquando amissis
          illis sit miser. Equidem etiam Epicurum, in physicis quidem,
          Democriteum puto.{" "}
        </p>

        <p className="p-4">
          Praeterea sublata cognitione et scientia tollitur omnis ratio et vitae
          degendae et rerum gerendarum. Haec igitur Epicuri non probo, inquam.
          Et harum quidem rerum facilis est et expedita distinctio. Traditur,
          inquit, ab Epicuro ratio neglegendi doloris. Disserendi artem nullam
          habuit.{" "}
        </p>
      </div>
    </div>
  );
}

export default BlogDetail;
