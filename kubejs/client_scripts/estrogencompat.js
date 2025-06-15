/**
 *
 * Compatibility Script for Create: Estrogen
 * Removes Horse Urine and other things that are not really needed for this compatibility from JEI.
 *
 */

JEIEvents.hideItems(event => {
        event.hide("estrogen:used_filter");
        event.hide("estrogen:centrifuge");
        event.hide("estrogen:testosterone_chunk");
        event.hide("estrogen:testosterone_powder");
        event.hide("estrogen:testosterone_mixture_bucket");
        event.hide("estrogen:filtrated_horse_urine_bucket");
        event.hide("estrogen:horse_urine_bucket");
        event.hide("estrogen:molten_amethyst_bucket");
        event.hide("estrogen:molten_slime_bucket");
        event.hide("estrogen:balls");
})

JEIEvents.hideFluids(event => {
        event.hide("estrogen:horse_urine");
        event.hide("estrogen:filtrated_horse_urine");
        event.hide("estrogen:molten_slime");
        event.hide("estrogen:molten_amethyst");
        event.hide("estrogen:testosterone_mixture");
})
