export function formatLocalTime(unixSeconds, tzOffsetSeconds, opts = {}) {
    const ms = (unixSeconds + tzOffsetSeconds) * 1000;
    return new Intl.DateTimeFormat ("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        ...opts,
    }).format(ms)
}