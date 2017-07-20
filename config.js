export default {
    site: {
        title: 'Nain Blog'
    },
    bucket: {
        slug: 'nain-blog',
        read_key: process.env.COSMIC_READ_KEY || '',
        write_key: process.env.COSMIC_WRITE_KEY || ''
    }
}