const VARIABLES = {
    female: 'Female',
    male: 'Male',
    na: 'X',
}

const  buildAncestors = (sample, ancestorKeys) => {
    let ancestors = new Set(ancestorKeys.map(k => sample[k])
        .filter(a => a !== VARIABLES.na && a));
    return {
        id: sample.id,
        ancestors: ancestors
    }
}

const sortSample = (a, b) => {
    return a.id.localeCompare(b.id);
}

const findMates = (data, level) => {
    data = data.filter( d => d.id );
    console.log(data);

    let femaleSamples = data.filter( a => a.sex === VARIABLES.female )
        .map(a => buildAncestors(a, level.ancestorKeys))
        .sort(sortSample);
    console.log('No. females.' + femaleSamples.length);
    console.log(femaleSamples)

    let maleSamples = data.filter( a => a.sex === VARIABLES.male )
        .map(a => buildAncestors(a, level.ancestorKeys))
        .sort(sortSample);
    console.log('No. males.' + maleSamples.length);

    let samples = [];
    maleSamples.forEach( m => {
        let mates = femaleSamples.map(f => {
            let a = m.ancestors;
            let b = f.ancestors;
            let intersect = new Set([...a].filter(i => b.has(i)));

            return {
                id: f.id,
                commonAncestors: intersect,
                commonAncestorStr: [...intersect].join(',')
            }
        }).filter( f => f.commonAncestors.size > 0 );

        samples.push({
            id: m.id,
            mates: mates
        })
    });

    return samples;
}

export default findMates