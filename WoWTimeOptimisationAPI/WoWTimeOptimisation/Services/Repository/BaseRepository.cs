using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace WoWTimeOptimisation.Services
{
    public class BaseRepository
    {
        internal void ExecuteCommand(string connectionString, Action<SqlConnection> task)
        {
            using (var conn = new SqlConnection(connectionString))
            {
                conn.Open();
                task(conn);
            }
        }

        internal IEnumerable<T> ExecuteCommand<T>(string connectionString, Func<SqlConnection, IEnumerable<T>> task)
        {
            using (var conn = new SqlConnection(connectionString))
            {
                conn.Open();
                return task(conn);
            }
        }
    }
}
