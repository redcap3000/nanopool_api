module.exports = (function()
{
    var m_Public  = {network: {}, pool: {}};
    var m_Private = {};

    var $request = require('request');
    var l_ApiUrl = 'https://api.nanopool.org/v1/eth/';

    var l_Path = '';

    /// Public methods
    m_Public.balance = function(p_Adress, p_Callback)
    {
        l_Path = 'balance/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.avghashratelimited = function(p_Adress, p_NbHours, p_Callback)
    {
        l_Path = 'avghashratelimited/' + p_Adress + '/' + p_NbHours;
        m_Private.launch(p_Callback);
    };

    m_Public.avghashrate = function(p_Adress, p_Callback)
    {
        l_Path = 'avghashrate/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.hashratechart = function(p_Adress, p_Callback)
    {
        l_Path = 'hashratechart/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.accountexist = function(p_Adress, p_Callback)
    {
        l_Path = 'accountexist/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.hashrate = function(p_Adress, p_Callback)
    {
        l_Path = 'hashrate/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.user = function(p_Adress, p_Callback)
    {
        l_Path = 'user/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.history = function(p_Adress, p_Callback)
    {
        l_Path = 'history/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.balance_hashrate = function(p_Adress, p_Callback)
    {
        l_Path = 'balance_hashrate/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.reportedhashrate = function(p_Adress, p_Callback)
    {
        l_Path = 'reportedhashrate/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.workers = function(p_Adress, p_Callback)
    {
        l_Path = 'workers/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.payments = function(p_Adress, p_Callback)
    {
        l_Path = 'payments/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.shareratehistory = function(p_Adress, p_Callback)
    {
        l_Path = 'shareratehistory/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.avghashrateworkers = function(p_Adress, p_NbHours, p_Callback)
    {
        l_Path = 'balance_havghashrateworkersashrate/' + p_Adress + '/' + p_NbHours;
        m_Private.launch(p_Callback);
    };

    m_Public.avghashrateworkers = function(p_Adress, p_Callback)
    {
        l_Path = 'avghashrateworkers/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.reportedhashrates = function(p_Adress, p_Callback)
    {
        l_Path = 'reportedhashrates/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    /// NETWORK
    m_Public.network.avgblocktime = function(p_Adress, p_Callback)
    {
        l_Path = 'network/avgblocktime/' + p_Adress;
        m_Private.launch(p_Callback);
    };

    m_Public.network.lastblocknumber = function(p_Callback)
    {
        l_Path = 'network/lastblocknumber';
        m_Private.launch(p_Callback);
    };

    m_Public.network.timetonextepoch = function(p_Callback)
    {
        l_Path = 'network/timetonextepoch';
        m_Private.launch(p_Callback);
    };

    m_Public.block_stats = function(p_Offset, p_Count, p_Callback)
    {
        l_Path = 'block_stats/' + p_Offset + '/' + p_Count;
        m_Private.launch(p_Callback);
    };

    m_Public.blocks = function(p_Offset, p_Count, p_Callback)
    {
        l_Path = 'blocks/' + p_Offset + '/' + p_Count;
        m_Private.launch(p_Callback);
    };

    m_Public.approximated_earnings = function(p_Hashrate, p_Callback)
    {
        l_Path = 'approximated_earnings/' + p_Offset;
        m_Private.launch(p_Callback);
    };

    m_Public.prices = function(p_Callback)
    {
        l_Path = 'prices';
        m_Private.launch(p_Callback);
    };

    m_Public.pool.activeminers = function(p_Callback)
    {
        l_Path = 'pool/activeminers';
        m_Private.launch(p_Callback);
    };

    m_Public.pool.activeworkers = function(p_Callback)
    {
        l_Path = 'pool/activeworkers';
        m_Private.launch(p_Callback);
    };

    m_Public.pool.hashrate = function(p_Callback)
    {
        l_Path = 'pool/hashrate';
        m_Private.launch(p_Callback);
    };

    m_Public.pool.topminers = function(p_Callback)
    {
        l_Path = 'pool/topminers';
        m_Private.launch(p_Callback);
    };

    m_Public.avghashratelimited = function(p_Adress, p_Worker, p_Hours, p_Callback)
    {
        l_Path = 'avghashratelimited/' + p_Adress + '/' + p_Worker + '/' + p_Hours;
        m_Private.launch(p_Callback);
    };

    m_Public.avghashrate = function(p_Adress, p_Worker, p_Callback)
    {
        l_Path = 'avghashrate/' + p_Adress + '/' + p_Worker;
        m_Private.launch(p_Callback);
    };

    m_Public.hashratechart = function(p_Adress, p_Worker, p_Callback)
    {
        l_Path = 'hashratechart/' + p_Adress + '/' + p_Worker;
        m_Private.launch(p_Callback);
    };

    m_Public.current_hashrate = function(p_Adress, p_Worker, p_Callback)
    {
        l_Path = 'current_hashrate/' + p_Adress + '/' + p_Worker;
        m_Private.launch(p_Callback);
    };

    m_Public.hashrate_history = function(p_Adress, p_Worker, p_Callback)
    {
        l_Path = 'history/' + p_Adress + '/' + p_Worker;
        m_Private.launch(p_Callback);
    };

    m_Public.reportedhashrate = function(p_Adress, p_Worker, p_Callback)
    {
        l_Path = 'reportedhashrate/' + p_Adress + '/' + p_Worker;
        m_Private.launch(p_Callback);
    };

    m_Public.shareratehistory = function(p_Adress, p_Worker, p_Callback)
    {
        l_Path = 'shareratehistory/' + p_Adress + '/' + p_Worker;
        m_Private.launch(p_Callback);
    };

    /// Private methods
    m_Private.launch = function(p_Callback)
    {
        $request(l_ApiUrl + l_Path, function(p_Error, p_Response, p_Body)
        {
            if (p_Error) throw p_Error;
            if (p_Response.statusCode !== 200) throw 'Status code is not 200, request failed';

            l_Path = '';
            p_Callback(p_Response, JSON.parse(p_Body));
        });
    };

    return m_Public;
})();